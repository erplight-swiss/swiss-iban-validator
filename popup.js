// DOM Elements
const ibanInput = document.getElementById('iban-input');
const validateBtn = document.getElementById('validate-btn');
const resultSection = document.getElementById('result-section');
const resultStatus = document.getElementById('result-status');
const resultDetails = document.getElementById('result-details');
const copyBtn = document.getElementById('copy-btn');
const copyText = document.getElementById('copy-text');

// Current validated IBAN (for copy function)
let currentFormattedIBAN = '';

// Event Listeners
validateBtn.addEventListener('click', handleValidation);
ibanInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleValidation();
  }
});
ibanInput.addEventListener('input', handleInputChange);
ibanInput.addEventListener('paste', () => setTimeout(handleInputChange, 0));
copyBtn.addEventListener('click', handleCopy);

// Auto-format IBAN while typing
function handleInputChange() {
  // Reset input styling
  ibanInput.classList.remove('error', 'valid');

  // Auto-format: NUR Buchstaben und Zahlen behalten
  let value = ibanInput.value.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
  if (value.length > 0) {
    value = value.match(/.{1,4}/g).join(' ');
  }

  // Only update if different (to preserve cursor position)
  if (ibanInput.value.toUpperCase().replace(/\s/g, '') !== value.replace(/\s/g, '')) {
    const cursorPos = ibanInput.selectionStart;
    ibanInput.value = value;
    // Try to restore cursor position
    const newPos = Math.min(cursorPos + 1, value.length);
    ibanInput.setSelectionRange(newPos, newPos);
  } else if (ibanInput.value !== value) {
    ibanInput.value = value;
  }
}

// Main validation handler
function handleValidation() {
  const iban = ibanInput.value.trim();

  if (!iban) {
    showError('Bitte geben Sie eine IBAN ein.');
    return;
  }

  const result = validateIBAN(iban);

  if (result.valid) {
    showValidResult(result);
    ibanInput.classList.remove('error');
    ibanInput.classList.add('valid');
  } else {
    showInvalidResult(result.error);
    ibanInput.classList.remove('valid');
    ibanInput.classList.add('error');
  }
}

// IBAN Validation (ISO 13616)
function validateIBAN(iban) {
  // 1. NUR Buchstaben und Zahlen behalten, alles andere entfernen
  iban = iban.replace(/[^A-Za-z0-9]/g, '').toUpperCase();

  // 2. Grundlegendes Format prüfen
  if (!/^[A-Z]{2}[0-9A-Z]+$/.test(iban)) {
    return { valid: false, error: 'Ungültiges Format. IBAN muss mit Ländercode beginnen.' };
  }

  // 3. Schweizer IBAN: CH + 2 Prüfziffern + 5 Clearing + 12 Kontonummer = 21 Zeichen
  // Format: CH + 2 Ziffern (Prüfziffer) + 5 Ziffern (Clearing/IID) + 12 alphanumerisch (Kontonummer)
  if (iban.startsWith('CH')) {
    if (iban.length !== 21) {
      return { valid: false, error: `Ungültige Länge. CH-IBAN muss 21 Zeichen haben (aktuell: ${iban.length}).` };
    }
    // CH + 2 Prüfziffern + 5 Clearing-Ziffern + 12 alphanumerische Zeichen (Kontonummer kann Buchstaben enthalten)
    if (!/^CH\d{7}[A-Z0-9]{12}$/.test(iban)) {
      return { valid: false, error: 'Ungültiges Format. CH-IBAN: CH + 7 Ziffern + 12 alphanumerische Zeichen.' };
    }
  }
  // Liechtenstein IBAN: LI + 2 Prüfziffern + 17 Zeichen = 21 Zeichen
  else if (iban.startsWith('LI')) {
    if (iban.length !== 21) {
      return { valid: false, error: `Ungültige Länge. LI-IBAN muss 21 Zeichen haben (aktuell: ${iban.length}).` };
    }
  }
  // Andere Länder: Allgemeine Prüfung
  else {
    // Nur Schweizer IBANs werden vollständig unterstützt
    return { valid: false, error: 'Nur Schweizer (CH) und Liechtensteiner (LI) IBANs werden unterstützt.' };
  }

  // 4. Checksum prüfen (ISO 13616 Mod-97)
  const rearranged = iban.slice(4) + iban.slice(0, 4);
  const numeric = rearranged.replace(/[A-Z]/g, (c) => (c.charCodeAt(0) - 55).toString());

  // Mod 97 mit BigInt für grosse Zahlen
  const checksum = mod97(numeric);

  if (checksum !== 1) {
    return { valid: false, error: 'Prüfziffer ungültig. Bitte IBAN überprüfen.' };
  }

  // 5. Clearing-Nummer extrahieren (Stellen 5-9)
  const clearingNr = iban.slice(4, 9);

  // 6. QR-IBAN prüfen (IID 30000-31999)
  const iid = parseInt(clearingNr, 10);
  const isQR = iid >= 30000 && iid <= 31999;

  // 7. Bank-Name ermitteln
  const bankName = getBankName(clearingNr);

  return {
    valid: true,
    isQR,
    clearingNr,
    bankName,
    formatted: formatIBAN(iban),
    raw: iban
  };
}

// Mod 97 Berechnung für grosse Zahlen
function mod97(numStr) {
  let remainder = 0;
  for (let i = 0; i < numStr.length; i++) {
    remainder = (remainder * 10 + parseInt(numStr[i], 10)) % 97;
  }
  return remainder;
}

// IBAN formatieren (4er-Gruppen)
function formatIBAN(iban) {
  return iban.match(/.{1,4}/g).join(' ');
}

// Valid result anzeigen
function showValidResult(result) {
  resultSection.classList.remove('hidden');
  copyBtn.classList.remove('hidden');
  currentFormattedIBAN = result.formatted;

  // Status
  resultStatus.className = 'result-status valid';
  resultStatus.innerHTML = `
    <span class="icon">✓</span>
    <span>IBAN gültig</span>
  `;

  // Details
  const typeBadge = result.isQR
    ? '<span class="qr-badge">QR-IBAN</span>'
    : '<span class="standard-badge">Standard-IBAN</span>';

  resultDetails.innerHTML = `
    <div class="detail-row">
      <span class="detail-label">Bank:</span>
      <span class="detail-value">${result.bankName}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Typ:</span>
      <span class="detail-value">${typeBadge}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Clearing-Nr:</span>
      <span class="detail-value mono">${result.clearingNr}</span>
    </div>
    <div class="detail-row">
      <span class="detail-label">Formatiert:</span>
      <span class="detail-value mono">${result.formatted}</span>
    </div>
  `;

  // Reset copy button
  copyBtn.classList.remove('copied');
  copyText.textContent = 'Kopieren';
}

// Invalid result anzeigen
function showInvalidResult(error) {
  resultSection.classList.remove('hidden');
  copyBtn.classList.add('hidden');
  currentFormattedIBAN = '';

  // Status
  resultStatus.className = 'result-status invalid';
  resultStatus.innerHTML = `
    <span class="icon">✗</span>
    <span>IBAN ungültig</span>
  `;

  // Details
  resultDetails.innerHTML = `
    <div class="detail-row">
      <span class="detail-label">Fehler:</span>
      <span class="detail-value">${error}</span>
    </div>
  `;
}

// Error anzeigen (kein Input)
function showError(message) {
  resultSection.classList.remove('hidden');
  copyBtn.classList.add('hidden');

  resultStatus.className = 'result-status invalid';
  resultStatus.innerHTML = `
    <span class="icon">!</span>
    <span>${message}</span>
  `;

  resultDetails.innerHTML = '';
}

// Copy to clipboard
async function handleCopy() {
  if (!currentFormattedIBAN) return;

  try {
    // Unformatierte IBAN kopieren (ohne Leerzeichen)
    const rawIBAN = currentFormattedIBAN.replace(/\s/g, '');
    await navigator.clipboard.writeText(rawIBAN);

    // Visual feedback
    copyBtn.classList.add('copied');
    copyText.textContent = 'Kopiert!';

    // Reset after 2 seconds
    setTimeout(() => {
      copyBtn.classList.remove('copied');
      copyText.textContent = 'Kopieren';
    }, 2000);
  } catch (err) {
    console.error('Copy failed:', err);
    copyText.textContent = 'Fehler';
    setTimeout(() => {
      copyText.textContent = 'Kopieren';
    }, 2000);
  }
}

// Focus input on load
ibanInput.focus();

export default function TemaButton({ tema, alternarTema }) {
  return (
    <button onClick={alternarTema}>
      Mudar para {tema === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
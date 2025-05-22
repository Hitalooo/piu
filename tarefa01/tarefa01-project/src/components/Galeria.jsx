import Card from './Card';
import styles from './Galeria.module.css';

export default function Galeria({ personagens, onSelecionar }) {
  return (
    <div className={styles.galeria}>
      {personagens.map((p) => (
        <Card
          key={p.nome}
          nome={p.nome}
          imagem={p.imagem}
          onClick={() => onSelecionar(p)}
        />
      ))}
    </div>
  );
}
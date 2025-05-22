import styles from './Card.module.css';

export default function Card({ nome, imagem, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={imagem} alt={nome} className={styles.imagem} />
      <span className={styles.nome}>{nome}</span>
    </div>
  );
}
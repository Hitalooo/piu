import styles from './Detalhes.module.css';

export default function Detalhes({ personagem, onClose, tema }) {
  return (
    <div className={`${styles.detalhes} ${styles[tema]}`}>
      <button className={styles.fechar} onClick={onClose}>Fechar</button>
      <img src={personagem.imagem} alt={personagem.nome} className={styles.imagemGrande} />
      <h2>{personagem.nome}</h2>
      <p>{personagem.descricao}</p>
    </div>
  );
}
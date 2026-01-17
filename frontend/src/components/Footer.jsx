export default function Footer() {
  return (
    <footer 
      style={{
        backgroundColor: 'var(--primary)',
        color: 'white',
        textAlign: 'center',
        padding: '24px 16px',
        marginTop: 'auto',
        borderTop: '3px solid var(--accent)'
      }}
    >
      <p style={{ marginBottom: 0, fontSize: '0.95rem', opacity: 0.9 }}>
        © 2025 Kresser SpA - Todos los derechos reservados
      </p>
    </footer>
  );
}

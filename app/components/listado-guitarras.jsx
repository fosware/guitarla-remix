import Guitarra from './guitarra'

export default function ListadoGuitarras({ guitarras }) {
    return (
        <>
            <h2 className="heading">Nuestras Guitarras</h2>
            {guitarras.length && (
                <div className="guitarras-grid">
                    {guitarras.map(guitarra => (
                        <Guitarra
                            key={guitarra?.attributes.url}
                            guitarra={guitarra?.attributes}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

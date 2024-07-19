export default function Section({title, children,...htmlAttribu}){
    return (
        <section {...htmlAttribu}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default function TabButton({children,isSelected,...htmlAttribu}){
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...htmlAttribu}>
                {children}
            </button>
        </li>
    )
}
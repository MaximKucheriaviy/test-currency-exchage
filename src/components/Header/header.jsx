import { StyledHeader } from "./headerSyled"

export const Header = ({rates}) => {
    return <StyledHeader>
        <h1>Currency converter</h1>
        <ul className="excageList">
            {Object.keys(rates).map(item => <li key={item}>
                <p className="name">{item}<span className="value">{rates[item]}</span></p>
            </li>)}
        </ul>
    </StyledHeader>
}
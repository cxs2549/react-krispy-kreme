import styled from 'styled-components'
import Hamburger from 'hamburger-react'
import {useState, useRef} from 'react'
import useOnClickOutside from 'use-onclickoutside'

const StyledBurger = styled.div.attrs({ className: ''  })`
`
const Burger = () => {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()
    useOnClickOutside(ref, () => setIsOpen(false))
return (
<StyledBurger ref={ref}>
    <Hamburger size={28} toggle={setIsOpen} toggled={isOpen} />
</StyledBurger>
)
}
export default Burger
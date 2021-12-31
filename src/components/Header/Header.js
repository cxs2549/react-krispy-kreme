import styled from 'styled-components'
import Burger from './Burger'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useOnClickOutside from 'use-onclickoutside'

const StyledHeader = styled.header.attrs({ className: 'border-b text-brandGreen' })`
`

const Logo = () => (
	<div className="flex-1">
		<img src={logo} alt="" className="w-32" />
	</div>
)

const Cart = () => <img src={cart} alt="" />

const Search = () => {
	const [ isOpen, setIsOpen ] = useState(false)
    const ref = useRef()
	const SearchOverlay = () => (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed bg-white left-0 w-full top-0 h-20 flex items-center px-4"
		>
			<div className="relative w-full mr-12">
			<BiSearch size={28} className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 ml-3" />
				<input
					type="search"
					placeholder="Search"
					className="h-12 w-full px-12 rounded-lg border-2 border-brandGreen"
				/>
				<AiOutlineClose
					onClick={() => setIsOpen(false)}
					size={28}
					className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 mr-2"
				/>
			</div>
		</motion.div>
	)
    useOnClickOutside(ref, () => setIsOpen(false))
	return (
		<div ref={ref}>
			<BiSearch onClick={() => setIsOpen(true)} size={28} className="cursor-pointer" />
			<AnimatePresence>{isOpen && <SearchOverlay />}</AnimatePresence>
		</div>
	)
}

const Icons = () => (
	<div className="flex items-center gap-4">
		<Search />
		<Cart />
	</div>
)
const Header = () => {
	return (
		<StyledHeader>
			<div className="max-w-7xl mx-auto px-4 bg-white h-20 flex items-center relative">
				<Burger />
				<Logo />
				<Icons />
			</div>
		</StyledHeader>
	)
}
export default Header

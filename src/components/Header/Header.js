import styled from 'styled-components'
import Burger from './Burger'
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import useOnClickOutside from 'use-onclickoutside'
import delivery from '../../assets/delivery.png'
import pickup from '../../assets/pickup.png'

const StyledHeader = styled.header.attrs({ className: 'border-b text-brandGreen' })`
`

const Logo = () => (
	<div className="flex-1 z-10">
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
			className="fixed bg-white left-0 w-full top-0 z-20 h-20 flex items-center px-4"
		>
			<div className="relative w-full mr-12">
				<BiSearch
					size={28}
					className="cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 ml-3"
				/>
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

const SignIn = () => (
	<a href="/" className="font-bold hidden md:block">
		Sign In / Join Rewards
	</a>
)
const Find = () => (
	<a href="/" className="font-bold hidden md:flex items-center gap-3 ml-8">
		<svg xmlns="http://www.w3.org/2000/svg" width="26" height="34" viewBox="0 0 26 34">
					<g fill="none" fill-rule="evenodd">
						<path d="M-11-7h48v48h-48z" />
						<g fill="#C8102E">
							<path d="M5.65 20.517a.928.928 0 0 0-.735.463c-.171.27-.114.528.053.77.812 1.18 1.61 2.37 2.446 3.53 1.55 2.154 3.3 4.143 5 6.173.472.562.62.58 1.118 0 1.093-1.275 2.21-2.53 3.254-3.848 1.083-1.367 2.088-2.798 3.131-4.198.18-.24.33-.511.015-.708-.637-.397-.878-1.049-1.158-1.686-.168-.382-.396-.732-.852-.74-.466-.01-.774.309-.972.695-.22.43-.394.886-.565 1.34-.429 1.139-1.433 1.684-2.48 1.329-.482-.164-.786-.521-1.036-.958-.593-1.036-1.452-1.037-2.067-.009-.173.289-.279.62-.463.9-.603.909-1.535 1.587-2.666.734-.413-.312-.653-.711-.805-1.173-.19-.578-.463-1.124-.539-1.75-.046-.384-.22-.784-.68-.864m7.002-18.954c-2.319.095-4.47.767-6.335 2.191-2.078 1.588-3.623 3.596-4.34 6.189-.487 1.758-.63 3.514-.158 5.308.37 1.405 1.096 2.644 1.662 3.957.178.412.378.417.762.18 1.44-.892 3.024-.48 3.47 1.318.151.613.338 1.219.539 1.818.061.186.137.432.392.446.252.014.342-.21.44-.393.12-.223.216-.458.337-.68 1.11-2.046 3.4-2.135 4.676-.185.323.494.648.48.901-.07.176-.382.275-.8.439-1.187.639-1.51 2.185-2.132 3.544-1.497.773.361 1.02 1.057 1.325 1.755.303.692.762.737 1.203.138 1.043-1.418 1.696-3.046 2.369-4.66.142-.343.349-.654.401-1.054.246-1.875.29-3.713-.362-5.54-.453-1.27-1-2.482-1.84-3.508-2.44-2.98-5.544-4.596-9.425-4.526M0 13.195c-.018-4.068 1.592-7.412 4.555-10.04A12.017 12.017 0 0 1 10.14.338c.964-.201 1.966-.357 2.886-.337 2.373.05 4.677.605 6.748 1.923 3.083 1.964 5.039 4.739 5.902 8.314.61 2.526.34 4.964-.69 7.35-1.747 4.05-4.316 7.549-6.99 10.983-1.292 1.658-2.637 3.271-4.079 4.798-.795.842-1.18.852-1.946-.044-1.608-1.883-3.245-3.742-4.743-5.72-1.98-2.617-3.922-5.264-5.393-8.223C.868 17.436-.013 15.45 0 13.195" />
							<path d="M13.046 9.528c-1.904-.21-3.551 1.704-3.566 3.437-.016 1.867 1.722 3.54 3.6 3.56 1.306.016 3.387-1.403 3.393-3.473.007-1.962-1.713-3.79-3.427-3.524m-.02-1.506c2.514-.282 5.013 2.175 4.974 5.03-.041 2.917-2.445 4.953-4.883 4.948-2.852-.006-5.131-2.024-5.117-5.112.013-2.667 2.224-5.093 5.026-4.866M3.003 13.142c.014-2.69.91-5.054 2.671-6.99 1.417-1.556 3.166-2.61 5.261-2.93.398-.062.773-.25 1.192-.218.44.033.813.135.866.681.056.572-.25.773-.751.842-2.042.282-3.89 1.015-5.347 2.597-1.144 1.242-1.942 2.649-2.244 4.39-.147.842-.165 1.664-.186 2.5-.015.64-.264 1.031-.692.982-.53-.062-.753-.442-.769-.968-.008-.295-.001-.59-.001-.886M15.12 3c.857.095 1.741.42 2.579.87.304.162.348.428.262.718-.095.318-.36.414-.68.412-.281-.001-.54-.089-.788-.201a8.183 8.183 0 0 0-1.668-.526c-.437-.094-.881-.217-.82-.757.068-.586.582-.48 1.114-.516" />
						</g>
					</g>
				</svg>
		<p>Find a location</p>
	</a>
)

const Icons = () => (
	<div className="flex items-center gap-4 md:gap-8">
		<SignIn />
		<Find />
		<Search />
		<Cart />
	</div>
)
const Header = () => {
	return (
		<StyledHeader>
			<div className="max-w-7xl mx-auto px-4 md:px-8 bg-white h-20 flex items-center relative">
				<Burger />
				<Logo />
				<Icons />
			</div>
			{/* <div className="gap-3 flex justify-center h-16 pb-2">
				
				<button className="bg-brandRed text-white flex items-center gap-2 font-bold uppercase h-14 w-[150px] justify-center rounded-full">
					<img src={delivery} alt="" />
					<div className="flex flex-col items-start leading-3 text-sm">
						<p className="pb-0.5">order</p>
						<p>delivery</p>
					</div>
				</button>
				<button className="bg-brandRed text-white flex items-center gap-2 font-bold uppercase h-14 w-[150px] justify-center rounded-full">
					<img src={pickup} alt="" />
					<div className="flex flex-col items-start leading-3 text-sm">
						<p className="pb-0.5">order</p>
						<p>pickup</p>
					</div>
				</button>
			</div> */}
		</StyledHeader>
	)
}
export default Header

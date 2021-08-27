const Header: React.FC = () => {
	return (
		<>
			<header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
				<h4 className="navbar-brand col-md-4 col-lg-2 me-0 px-3">
					Germany Covid
					<span className="brand-img">{'\u00A0'}</span>
					meter
				</h4>
				<button
					className="navbar-toggler position-absolute d-md-none collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#sidebarMenu"
					aria-controls="sidebarMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
			</header>
		</>
	);
};
export default Header;

import React from "react";
import "@/assets/css/header.css";
import { StateDataContext } from "@/App";
import { Link } from "react-router";
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogoFullWhiteVariant } from "@/data";
import { IconWrapper } from "@/data/Icons";
import { routes } from "@/data/routes";
import { useModalTrigger } from "@/hooks/useModalTrigger";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { AboutDropdownContent, HowItWorksDropdownContent, ResourcesDropdownContent } from "@/components/PageComponents/Landing/HeaderDropdown";

export default function LandingPageHeader() {
	const { stateData, setStateData } = React.useContext(StateDataContext);
	const { isLoggedIn } = stateData;

	const {
		data: { modals },
		toggleModal,
		switchModal,
	} = useModalTrigger(stateData);

	function handleSideBarVisibility() {
		const newState = structuredClone(stateData);
		newState.landingSideBarVisible = true;
		setStateData(newState);
	}

	return (
		<>
			<header id="v-header" className="">
        <div className="w-full py-2 pb-3 mx-auto sm:w-11/12 2xl:w-9/12">
          <div className="flex items-center px-4 mx-auto sm:px-0">
            <div className="flex items-center justify-between w-5/6 p-0 m-0">
              <figure className="p-0 v-logo-image" role="img" title="">
								<Link to={routes.INDEX}>
									<img src={LogoFullWhiteVariant} alt="" className="img-fluid" />
								</Link>
							</figure>
              <nav className="flex-grow hidden p-0 v-navigation v-middle-links xl:block">
                <ul className="justify-center v-navigation-inner gap-x-4 lg:gap-x-5">
									<li className="v-each-link">
										<Link to={routes} className="v-link">
											<span className="v-subtext">Home</span>
										</Link>
									</li>
									<li className="v-each-link">
										<DropdownMenu>
											<DropdownMenuTrigger className="v-link">
												<span className="v-subtext">About Us</span>
												<IconWrapper>
													<ChevronDownIcon className="w-4 h-4"/>
												</IconWrapper>
											</DropdownMenuTrigger>
                      <AboutDropdownContent />
										</DropdownMenu>
									</li>
									<li className="v-each-link">
										<DropdownMenu>
											<DropdownMenuTrigger className="v-link">
												<span className="v-subtext">How it works</span>
												<IconWrapper>
													<ChevronDownIcon className="w-4 h-4"/>
												</IconWrapper>
											</DropdownMenuTrigger>
                      <HowItWorksDropdownContent />
										</DropdownMenu>
									</li>
									<li className="v-each-link">
                    <Link to={routes.PRICING} className="v-link">
                      <span className="v-subtext">Pricing</span>
                    </Link>
									</li>
									<li className="v-each-link">
										<DropdownMenu>
											<DropdownMenuTrigger className="v-link">
												<span className="v-subtext">Resources</span>
												<IconWrapper>
													<ChevronDownIcon className="w-4 h-4"/>
												</IconWrapper>
											</DropdownMenuTrigger>
                      <ResourcesDropdownContent />
										</DropdownMenu>
									</li>
								</ul>
							</nav>
						</div>
            <div className="flex items-center justify-end w-1/5 p-0 gap-x-5">
              <nav className="hidden v-navigation v-auth lg:flex">
								<ul className="v-navigation-inner gap-x-3.5">
									<li className="v-each-link">
										<Link to={routes.AUTH.login.abs} className="v-link v-login">
											Login
										</Link>
									</li>
									<li className="v-each-link">
										<Link to={routes.AUTH.register.abs} className="v-link v-register">
											Sign Up
										</Link>
									</li>
								</ul>
							</nav>
              <div className="flex items-center xl:hidden">
								<button type="button" onClick={handleSideBarVisibility} className="v-mobile-menu-toggler">
									<IconWrapper>
										<MenuIcon className="w-7 h-7" />
									</IconWrapper>
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* auth modals @start */}
			{/* auth modals @end */}
			{/* <LandingSidebar /> */}
		</>
	);
}

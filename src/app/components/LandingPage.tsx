'use client';

import Link from "next/link";
import { Button } from "primereact/button";

const LandingPage = () => {
	return (
		<>
			<div className="surface-100 flex flex-column justify-content-center align-content-center w-screen h-screen">

				<div className="surface-0 text-700 text-center">

					<div className="text-blue-600 font-bold mb-3"><i className="pi pi-discord"></i>&nbsp;POWERED BY DISCORD</div>
					<div className="text-900 font-bold text-5xl mb-3">Join Our Design Community</div>
					<div className="text-700 text-2xl mb-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam eligendi quos.</div>
					<Link href="/menu">
						<Button label="Join Now" icon="pi pi-discord" className="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap" />
					</Link>
				</div>

			</div>
		</>
	);
};

export default LandingPage;

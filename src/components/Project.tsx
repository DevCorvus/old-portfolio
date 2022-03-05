import Image from 'next/image';

interface ProjectInterface {
	name: string;
	description: string;
	favicon: StaticImageData;
	image: StaticImageData;
	url: string;
}

export default function Project({
	name,
	description,
	favicon,
	image,
	url,
}: ProjectInterface) {
	return (
		<section className="col-span-2 lg:col-span-1">
			<div className="flex flex-col justify-between bg-slate-100 rounded-md border border-violet-900">
				<div className="text-neutral-900 p-2">
					<header className="flex items-center gap-2">
						<Image
							src={favicon}
							width={30}
							height={30}
							alt={`${name} Favicon`}
						/>
						<h2 className="text-xl font-bold">{name}</h2>
					</header>
					<p>{description}</p>
				</div>
				<a
					className="relative group"
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div className="absolute top-0 left-0 w-full h-full transition-all duration-300 group-hover:bg-violet-200 rounded-md content-none"></div>
					<Image
						className="rounded-md transition-all duration-300 group-hover:scale-125 group-hover:opacity-25"
						src={image}
						layout="intrinsic"
						alt={`${name} Image capture`}
					/>
					<div className="absolute top-0 left-0 w-full h-full hidden group-hover:flex flex-col justify-center items-center">
						<span className="p-2 bg-violet-500 rounded-md shadow-md">
							Visit Website
						</span>
					</div>
				</a>
			</div>
		</section>
	);
}

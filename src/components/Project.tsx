import Image from 'next/image';
import useTranslation from 'src/hooks/useTranslation';

interface ProjectInterface {
	name: string;
	description: string;
	favicon: StaticImageData;
	image: StaticImageData;
	url: string;
	repo: string;
}

export default function Project({
	name,
	description,
	favicon,
	image,
	url,
	repo,
}: ProjectInterface) {
	const {
		projects: { visit },
	} = useTranslation();

	return (
		<section className="col-span-2 lg:col-span-1">
			<div className="flex flex-col justify-between bg-slate-100 rounded-md border border-violet-900">
				<div className="text-neutral-900 p-2">
					<header className="flex justify-between items-center">
						<div className="flex items-center gap-2">
							<Image
								src={favicon}
								width={30}
								height={30}
								alt={`${name} Favicon`}
							/>
							<h2 className="text-xl font-bold">{name}</h2>
						</div>
						<a
							title="Repo"
							href={repo}
							className="hover:text-violet-500 focus:text-violet-500 duration-300 transition"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-github fa-lg"></i>
						</a>
					</header>
					<p className="my-2">{description}</p>
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
							{visit}
						</span>
					</div>
				</a>
			</div>
		</section>
	);
}

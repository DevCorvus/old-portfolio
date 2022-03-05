import useTranslation from '../hooks/useTranslation';
import Header from '../components/Header';
import Box from '../components/Box';
import Project from '../components/Project';
import devcorvus from 'public/images/devcorvus.png';
import devcorvusFavicon from 'public/images/devcorvus-favicon.png';
import relyn from 'public/images/relyn.png';
import relynFavicon from 'public/images/relyn-favicon.png';
import devbanner from 'public/images/devbanner.png';
import devbannerFavicon from 'public/images/devbanner-favicon.png';
import pigeonclub from 'public/images/pigeonclub.png';
import pigeonclubFavicon from 'public/images/pigeonclub-favicon.png';
import flaskanimals from 'public/images/flaskanimals.png';
import flaskanimalsFavicon from 'public/images/flaskanimals-favicon.png';
import djangotodoapp from 'public/images/djangotodoapp.png';
import djangotodoappFavicon from 'public/images/djangotodoapp-favicon.png';

export default function Projects() {
	const {
		projects: { title, note, details },
	} = useTranslation();
	return (
		<>
			<section>
				<Header>{title}</Header>
				<Box>
					<p>{note}</p>
					<div className="grid grid-cols-2 gap-4">
						<Project
							name={details.project1.title}
							description={details.project1.description}
							favicon={devcorvusFavicon}
							image={devcorvus}
							url="/"
						/>
						<Project
							name={details.project2.title}
							description={details.project2.description}
							favicon={devbannerFavicon}
							image={devbanner}
							url="https://devbanner.herokuapp.com/"
						/>
						<Project
							name={details.project3.title}
							description={details.project3.description}
							favicon={relynFavicon}
							image={relyn}
							url="https://relyn.herokuapp.com/"
						/>
						<Project
							name={details.project4.title}
							description={details.project4.description}
							favicon={pigeonclubFavicon}
							image={pigeonclub}
							url="https://pigeonclub.herokuapp.com/"
						/>
						<Project
							name={details.project5.title}
							description={details.project5.description}
							favicon={djangotodoappFavicon}
							image={djangotodoapp}
							url="https://djangotodoapp-devcorvus.herokuapp.com/"
						/>
						<Project
							name={details.project6.title}
							description={details.project6.description}
							favicon={flaskanimalsFavicon}
							image={flaskanimals}
							url="https://flaskanimals.herokuapp.com/"
						/>
					</div>
				</Box>
			</section>
		</>
	);
}

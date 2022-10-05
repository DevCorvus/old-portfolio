import devbannerFavicon from 'public/images/devbanner-favicon.png';
import devbanner from 'public/images/devbanner.png';
import devcorvusFavicon from 'public/images/devcorvus-favicon.png';
import devcorvus from 'public/images/devcorvus.png';
import djangotodoappFavicon from 'public/images/djangotodoapp-favicon.png';
import djangotodoapp from 'public/images/djangotodoapp.png';
import flaskanimalsFavicon from 'public/images/flaskanimals-favicon.png';
import flaskanimals from 'public/images/flaskanimals.png';
import picteryFavicon from 'public/images/pictery-favicon.png';
import pictery from 'public/images/pictery.png';
import pigeonclubFavicon from 'public/images/pigeonclub-favicon.png';
import pigeonclub from 'public/images/pigeonclub.png';
import relynFavicon from 'public/images/relyn-favicon.png';
import relyn from 'public/images/relyn.png';
import Box from 'src/components/Box';
import Header from 'src/components/Header';
import Project from 'src/components/Project';
import useTranslation from 'src/hooks/useTranslation';

export default function Projects() {
	const {
		projects: { title, note, details },
	} = useTranslation();
	return (
		<>
			<section>
				<Header>{title}</Header>
				<Box>
					<p className="mb-2">{note}</p>
					<div className="grid grid-cols-2 gap-4">
						<Project
							name={details.pictery.title}
							description={details.pictery.description}
							favicon={picteryFavicon}
							image={pictery}
							url="https://pictery.onrender.com/"
							repo="https://github.com/DevCorvus/pictery"
						/>
						<Project
							name={details.portfolio.title}
							description={details.portfolio.description}
							favicon={devcorvusFavicon}
							image={devcorvus}
							url="/"
							repo="https://github.com/DevCorvus/portfolio"
						/>
						<Project
							name={details.devbanner.title}
							description={details.devbanner.description}
							favicon={devbannerFavicon}
							image={devbanner}
							url="https://devbanner.herokuapp.com/"
							repo="https://github.com/DevCorvus/devbanner"
						/>
						<Project
							name={details.relyn.title}
							description={details.relyn.description}
							favicon={relynFavicon}
							image={relyn}
							url="https://relyn.herokuapp.com/"
							repo="https://github.com/DevCorvus/relyn-app"
						/>
						<Project
							name={details.pigeonClub.title}
							description={details.pigeonClub.description}
							favicon={pigeonclubFavicon}
							image={pigeonclub}
							url="https://pigeonclub.herokuapp.com/"
							repo="https://github.com/DevCorvus/pigeon-club"
						/>
						<Project
							name={details.djangoTodoApp.title}
							description={details.djangoTodoApp.description}
							favicon={djangotodoappFavicon}
							image={djangotodoapp}
							url="https://djangotodoapp-devcorvus.herokuapp.com/"
							repo="https://github.com/DevCorvus/django-todo-app"
						/>
						<Project
							name={details.flaskAnimals.title}
							description={details.flaskAnimals.description}
							favicon={flaskanimalsFavicon}
							image={flaskanimals}
							url="https://flaskanimals.herokuapp.com/"
							repo="https://github.com/DevCorvus/flask-animals"
						/>
					</div>
				</Box>
			</section>
		</>
	);
}

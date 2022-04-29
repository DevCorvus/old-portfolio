import Header from '../components/Header';
import Subtitle from '../components/Subtitle';
import Box from '../components/Box';
import Skill from '../components/Skill';
import Separator from '../components/Separator';
import ShowMore from '../components/ShowMore';
import ReadMore from '../components/ReadMore';
import useTranslation from '../hooks/useTranslation';

export default function Skills() {
	const {
		skills: { title, subtitles, intro, details },
	} = useTranslation();
	return (
		<>
			<section>
				<Header>{title}</Header>
				<Box>
					<p>{intro.p1}</p>
					<p>{intro.p2}</p>
					<ReadMore>
						<p>{intro.p3}</p>
						<p>{intro.p4}</p>
					</ReadMore>
					<p>{intro.p5}</p>
				</Box>
			</section>
			<section>
				<Subtitle>{subtitles.s1}</Subtitle>
				<Box>
					<Skill title="ReactJS" level={4}>
						{details.react}
					</Skill>
					<Separator />
					<Skill title="TailwindCSS" level={4}>
						{details.tailwind}
					</Skill>
					<Separator />
					<Skill title="Bootstrap" level={2}>
						{details.bootstrap}
					</Skill>
					<Separator />
					<Skill title="HTML" level={4}>
						{details.html}
					</Skill>
					<Separator />
					<Skill title="CSS" level={3}>
						{details.css}
					</Skill>
					<ShowMore>
						<Separator />
						<Skill title="jQuery" level={2}>
							{details.jquery}
						</Skill>
						<Separator />
						<Skill title="Gulp" level={2}>
							{details.gulp}
						</Skill>
						<Separator />
						<Skill title="Svelte" level={1} />
						<Separator />
						<Skill title="Vue" level={1} />
						<Separator />
						<Skill title="Angular" level={1} />
					</ShowMore>
				</Box>
			</section>
			<section>
				<Subtitle>{subtitles.s2}</Subtitle>
				<Box>
					<Skill title="NodeJS + TypeScript" level={5}>
						{details.node}
					</Skill>
					<Separator />
					<Skill title="Laravel" level={3}>
						{details.laravel}
					</Skill>
					<Separator />
					<Skill title="Django" level={3}>
						{details.django}
					</Skill>
					<ShowMore>
						<Separator />
						<Skill title="Flask" level={2} />
						<Separator />
						<Skill title="NestJS" level={1} />
					</ShowMore>
				</Box>
			</section>
			<section>
				<Subtitle>{subtitles.s3}</Subtitle>
				<Box>
					<Skill title="Postgres" level={3}>
						{details.postgres}
					</Skill>
					<Separator />
					<Skill title="MongoDB" level={3}>
						{details.mongodb}
					</Skill>
					<Separator />
					<Skill title="MySQL" level={2}>
						{details.mysql}
					</Skill>
					<ShowMore>
						<Separator />
						<Skill title="SQLite (Development)" level={2} />
					</ShowMore>
				</Box>
			</section>
			<section>
				<Subtitle>{subtitles.s4}</Subtitle>
				<Box>
					<Skill title="Heroku" level={3}>
						{details.heroku}
					</Skill>
					<Separator />
					<Skill title="Netlify" level={2}>
						{details.netlify}
					</Skill>
					<Separator />
					<Skill title="Vercel" level={1} />
				</Box>
			</section>
			<section>
				<Subtitle>{subtitles.s5}</Subtitle>
				<Box>
					<Skill title="JavaScript" level={5}>
						{details.javascript}
					</Skill>
					<Separator />
					<Skill title="TypeScript" level={4}>
						{details.typescript}
					</Skill>
					<Separator />
					<Skill title="Python" level={3}>
						{details.python}
					</Skill>
					<ShowMore>
						<Separator />
						<Skill title="PHP" level={2}>
							{details.php}
						</Skill>
						<Separator />
						<Skill title="Rust" level={2}>
							{details.rust}
						</Skill>
						<Separator />
						<Skill title="C#" level={1}></Skill>
						<Separator />
						<Skill title="Java" level={1}></Skill>
					</ShowMore>
				</Box>
			</section>
			<ShowMore alternative>
				<section>
					<Subtitle>{subtitles.s6}</Subtitle>
					<Box>
						<Skill title="TypeORM" level={3} />
						<Separator />
						<Skill title="Mongoose" level={4} />
						<Separator />
						<Skill title="Django ORM" level={2} />
						<ShowMore>
							<Separator />
							<Skill title="Eloquent ORM" level={2} />
							<Separator />
							<Skill title="SQLAlchemy" level={1} />
						</ShowMore>
					</Box>
				</section>
				<section>
					<Subtitle>{subtitles.s7}</Subtitle>
					<Box>
						<Skill title="Blade" level={3} />
						<Separator />
						<Skill title="Django Template Engine / Jinja2" level={3} />
						<Separator />
						<Skill title="EJS / Handlebars" level={2} />
					</Box>
				</section>
				<section>
					<Subtitle>{subtitles.s8}</Subtitle>
					<Box>
						<Skill title="Git" level={3}>
							{details.git}
						</Skill>
						<Separator />
						<Skill title="Passport.js" level={3} />
						<Separator />
						<Skill title="Webpack" level={2} />
						<ShowMore>
							<Separator />
							<Skill title="Jest" level={2} />
							<Separator />
							<Skill title="GraphQL" level={1} />
						</ShowMore>
					</Box>
				</section>
			</ShowMore>
		</>
	);
}

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
					<p>{intro.p3}</p>
					<ReadMore>
						<p>{intro.p4}</p>
						<p>{intro.p5}</p>
					</ReadMore>
					<p>{intro.p6}</p>
				</Box>
			</section>
			<section>
				<Subtitle>{subtitles.s1}</Subtitle>
				<Box>
					<Skill title="React.js" level={4}>
						{details.react}
					</Skill>
					<Separator />
					<Skill title="TailwindCSS" level={4}>
						{details.tailwind}
					</Skill>
					<Separator />
					<Skill title="Vite.js" level={2}>
						{details.vite}
					</Skill>
					<Separator />
					<ShowMore>
						<Skill title="HTML" level={4}>
							{details.html}
						</Skill>
						<Separator />
						<Skill title="CSS" level={3}>
							{details.css}
						</Skill>
						<Separator />
						<Skill title="Bootstrap 5" level={2}>
							{details.bootstrap}
						</Skill>
						<Separator />
						<Skill title="jQuery" level={2}>
							{details.jquery}
						</Skill>
						<Separator />
						<Skill title="Gulp" level={2} />
						<Separator />
						<Skill title="Vue" level={1} />
						<Separator />
						<Skill title="Svelte" level={1} />
					</ShowMore>
				</Box>
			</section>
			<section>
				<Subtitle>{subtitles.s2}</Subtitle>
				<Box>
					<Skill title="Node.js + TypeScript" level={5} interested>
						{details.node}
					</Skill>
					<Separator />
					<Skill title="Laravel" level={3}>
						{details.laravel}
					</Skill>
					<Separator />
					<Skill title="Django" level={2}>
						{details.django}
					</Skill>
					<ShowMore>
						<Separator />
						<Skill title="Flask" level={1} />
					</ShowMore>
				</Box>
			</section>
			<section>
				<Subtitle>{subtitles.s3}</Subtitle>
				<Box>
					<Skill title="Postgres" level={3} interested>
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
					<Skill title="TypeScript" level={4} interested>
						{details.typescript}
					</Skill>
					<Separator />
					<Skill title="Python" level={3}>
						{details.python}
					</Skill>
					<ShowMore>
						<Separator />
						<Skill title="Rust" level={2} interested>
							{details.rust}
						</Skill>
						<Separator />
						<Skill title="PHP" level={2}>
							{details.php}
						</Skill>
						<Separator />
						<Skill title="GO" level={1} interested>
							{details.go}
						</Skill>
						<Separator />
						<Skill title="C#" level={1}>
							{details.cSharp}
						</Skill>
					</ShowMore>
				</Box>
			</section>
			<ShowMore alternative>
				<section>
					<Subtitle>{subtitles.s6}</Subtitle>
					<Box>
						<Skill title="Prisma" level={2} interested />
						<Separator />
						<Skill title="TypeORM" level={2} />
						<Separator />
						<Skill title="Mongoose" level={4} />
						<ShowMore>
							<Separator />
							<Skill title="Django ORM" level={2} />
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
						<Skill title="EJS" level={3} />
						<Separator />
						<Skill title="Blade" level={2} />
						<Separator />
						<Skill title="Django Template Engine / Jinja2" level={2} />
					</Box>
				</section>
				<section>
					<Subtitle>{subtitles.s8}</Subtitle>
					<Box>
						<Skill title="Git" level={3}>
							{details.git}
						</Skill>
						<Separator />
						<Skill title="Passport.js" level={4} />
						<Separator />
						<Skill title="Jest" level={2} />
						<ShowMore>
							<Separator />
							<Skill title="Webpack" level={2} />
							<Separator />
							<Skill title="Docker" level={1} interested />
							<Separator />
							<Skill title="GraphQL" level={1} interested />
						</ShowMore>
					</Box>
				</section>
			</ShowMore>
		</>
	);
}

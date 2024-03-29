import Document, { Head, Html, Main, NextScript } from 'next/document';

const backgroundStyle = {
	background: 'linear-gradient(to top, #12002e, #000000)',
};

class MyDocument extends Document {
	render() {
		return (
			<Html style={backgroundStyle}>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Dosis&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;

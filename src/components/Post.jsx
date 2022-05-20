import { Link } from 'react-router-dom';
import truncateString from '../utils/TruncateString';
const Post = ({ datosPost }) => {
	let { titulo, autor, contenido, _id } = datosPost;

	let classIcon = 'Star-heart animated-like';

	let handleOnclick = () => {
		classIcon = 'Star-heart animated-like is-loved';
	};

	contenido = truncateString(contenido, 130);
	return (
		<article className="flex bg-[#fff] rounded mb-4 drop-shadow-lg post relative">
			<div className="postHolder">
				<div className="Star is-level-1 is-small">
					<span className={classIcon} onClick={handleOnclick}></span>
					<span className="Star-number">1</span>
				</div>
				<div className="Discussion-right">
					<h3 className="titlePost">{titulo}</h3>
					<p className="grape">{contenido}</p>
					<div className="Contribution-extract">
						<div className="ContributionMeta">
							<div className="contributionContainer">
								<div className="ContributionAuthor w-4/12 justify-start">
									<h6>{autor}</h6>
									<figure></figure>
									<a href=""></a>
								</div>
							</div>
							<time className="ContributionDate w-4/12 flex items-center justify-center">
								<i></i>
								<span>Hoy</span>
							</time>
							<div className="ContributionComment w-4/12">
								<i></i>
								<span>
									<span>Comentarios</span>
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Link to="/comment" className="absolute w-full h-full top-0 bottom-0">
				{''}
			</Link>
		</article>
	);
};

export default Post;

import React from "react";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
	title: string;
	description: string;
	img: string;
	type: string;
	link: string;
	technologies: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ ...props }) => {
	return (
		<article className={`${styles.card} p-10 bg-gray-800 rounded-xl`}>
			<a href={props.link} target="_blank" rel="noopener noreferrer" className="flex gap-4">
				<img src={props.img} alt={props.title} className="project-image" />
				<div className="project-content">
					<h2 className="project-title">{props.title}</h2>
					<p>{props.type}</p>
					<p>{props.technologies}</p>
					<p className="project-description">{props.description}</p>
				</div>
			</a>
		</article>
	);
};

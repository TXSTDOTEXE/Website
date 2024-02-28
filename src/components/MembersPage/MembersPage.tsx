import type { ReactElement } from "react";
import "./MembersPage.css";
import exeMembers from "../../exe-members/data.json";

function MembersPage(): ReactElement {
	
	return (
		<>
			<h1>.EXE Members</h1>

			<div className="members">
				{
					exeMembers.members.map((member, i) => {
						return (
							<div className="member-card" key={i}>
								<h3>{member.name}</h3>
								<span>{member.role}</span>
							</div>
						);
					})
				}
			</div>
		</>
	);
}

export default MembersPage;
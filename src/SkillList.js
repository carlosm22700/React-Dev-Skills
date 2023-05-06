import { SkillListItem } from "./SkillListItem"

export function SkillList ({skills}) {
    return (
        <ul className="SkillList">
            {skills.length === 0 && "No Skills Added"}
            {skills.map(skill => {
                return (
                    <SkillListItem
                    {...skill}
                    />
                )
            })}
        </ul>
    )
}
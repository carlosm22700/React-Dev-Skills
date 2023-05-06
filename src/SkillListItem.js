export function SkillListItem ({title, level}) {
    return (
        <li>
          <label>
            {title} - Level: {level}
          </label>
        </li>
    )
}
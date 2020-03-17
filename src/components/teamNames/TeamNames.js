import React, { useState } from 'react'
import "./teamNames.scss"


class TeamNames extends React.Component {


    render() {
        const teamNameStyle = (team) => {
            return {
                top: team.top,
                left: team.left,
                zIndex: 10,
            }
        }
        return (
            this.props.teams.map((team) => {
                return (
                    <div className="team-name" style={teamNameStyle(team)}>
                        {team.name}
                    </div >
                )
            })
        )
    }
}

export default TeamNames
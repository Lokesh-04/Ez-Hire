import React from 'react'

function SideBar() {
  return (
    <div>
      <div id="profile">
        <div id="username"></div>
        <div id="profile-pic"></div>
      </div>
      <div id="post-a-job">
        <button> + Post a Job</button>
      </div>

      <div id="notifications">
        {/* display the notification here */}
      </div>
    </div>
  )
}

export default SideBar

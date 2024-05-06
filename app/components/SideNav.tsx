

function SideNav({isVisible} : any) {
  return (
    <div className={`${isVisible?'flex':'hidden'} lg:flex  `}>
      
      <ul className="menu bg-base-200 lg:w-56 w-screen h-screen  rounded-box">
      <h1 className="text-2xl text-white font-bold">Menu</h1>
        <li><a>Available Quizzes</a></li>
        <li>
          <details open>
            <summary>Parent</summary>
            <ul>
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
              <li>
                <details open>
                  <summary>Parent</summary>
                  <ul>
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
    </ul>
    </div>
  )
}

export default SideNav

import Header from "./components/Header"

function App() { 



  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Routes
            path='/'
            element={
              <>
                {showAddTask && <AppTask onAdd={addTak} />}
                {tasks.lengh > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />  
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
        <Routes path='/about' element={<About />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  )
}

export default App

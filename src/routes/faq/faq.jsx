import './faq.css'

const Faq = () => {
  return (
    <div id='frequently-asked-questions-container'>
      <h1>Frequently Asked Questions</h1>
      <section id='frequently-asked-questions-section'>
        <h3 className='question'>Do you plan on making more front end changes? If so, what would they be?</h3>
        <div className='answer'>
          <p>Yes, I plan on making a few changes:</p>
          <ul>
            <li>Modals need better styling</li>
            <li>Need to normalize the time stamps for each task</li>
            <li>Need a better way of presenting each task</li>
            <li>Some graphs on the home page would be cool</li>
            <li>Update the styling of the buttons</li>
            </ul>
        </div>
        <br />
        <h3 className='question'>Do you plan on making more back end changes? If so, what would they be?</h3>
        <div className='answer'>
          <p>Yes, here are some updates planned:</p>
          <ul>
            <li>Add the ability to add more projects and each have their own set of tasks.</li>
            <li>Multiple users as well having their own projects</li>
            <li>Login and Logout page</li>
            <li>Stat trackers across different users</li>
            <li>Probably do a better job handling back-end validation</li>
          </ul>
        </div>
        <br />
        <h3 className='question'>What did you gain the most out of this project?</h3>
        <div className='answer'>
          <p>A few important things I learned/worked with:</p>
          <ul>
            <li>Learned to use React Router</li>
            <li>Learned how to use React Modals</li>
            <li>Became more confident in using React</li>
            <li>Flex box is a pain but I'm getting used to it</li>
            <li>Worked with some front-end validation</li>
            <li>Able to branch applications to different, smaller, problems</li>
            <li>Able to digest documentation for new technology</li>
            <li>Finding inefficiencies as I code becomes easier to spot</li>
          </ul>
        </div>
        <br />
        <h3 className='question'>Is this the end of the presentation?</h3>
        <div className='answer'>
          <p>Yes, but I really enjoyed getting lost in this project.</p>
          <p>Here is a gif of Pepo (young Pepe):</p>
          <img src="https://c.tenor.com/FWyrZn41MiwAAAAC/peepoclap.gif" alt="Peepo Clapping" />
        </div>
      </section>
    </div>
  )
}

export default Faq;
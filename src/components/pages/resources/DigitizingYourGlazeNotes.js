import 'styles/resources_digitizingYourGlazeNotes.scss'
import { updatePageTitle, resetScroll } from 'Constants'
import { useEffect } from 'react'
import DownloadButton from 'components/general/DownloadButton'
import LinkButton from 'components/general/LinkButton'

function DigitizingYourGlazeNotes() {
    useEffect(() => {
        updatePageTitle("Digitizing Your Glaze Notes")
        return resetScroll
    }, [])

    return (
        <section className="resource digitizing-your-glaze-notes">
            <div className="description">
                <h1>Digitizing Your Glaze Notes</h1>
                <hr></hr>
                <p>
                    You can download copies of my 2022 glaze notes spreadsheet and templates for Google Sheets / Excel here.
                </p>
                <LinkButton 
                    path="https://docs.google.com/spreadsheets/d/1bwTMUSUUoUrE4Mq6elIhTE5pMvLo06CpVLQ9xpfuxhY/edit?usp=sharing"
                    text="My 2022 Google Sheet"
                />
                <LinkButton 
                    path="https://docs.google.com/spreadsheets/d/1JJXPLa13rbg-19dYAWaEBHvajIQD8A_mVXlUNSlgOQ0/edit?usp=sharing"
                    text="Google Sheet Template"
                />
                <DownloadButton 
                    fileName="Julia Hindle Glaze Notes Template.xlsx"
                    text="Excel Template"
                />
            </div>
            <div className="content">
                <h2>Why Go Digital?</h2>
                <div className="group">
                    <p>
                        Anyone who has already started making their own glazes knows how important notekeeping is. 
                        My impression is that most potters still prefer to take notes on paper, which is how I started out, but let me make a case using a spreadsheet instead.
                    </p>
                    <ul>
                        <li>
                            <h3>Less risk</h3>
                            <p>I was concerned about misplacing or damaging my glaze notes if I did them on paper. I’m sure one could think of a system to help mitigate this, but I thought it would be easier to keep my notes safe if they were digital and stored on a cloud service like Google Drive. This had the added benefit of my notes being highly available. In a pinch, I could pull my spreadsheets up on my phone or someone else’s computer if I didn’t have my computer on me.</p>
                        </li>
                        <li>
                            <h3>Easier integration of photos</h3>
                            <p>This was actually the reason I decided to move to digital. Glaze making is an inherently visual craft, and the thought of having to print and attach photos manually seemed too tedious to me. Plus the alternative of including no photos at all was not something I was interested in entertaining.</p>
                        </li>
                        <li>
                            <h3>Formatting and formulas</h3>
                            <p>I like having my recipes formatted in a particular way, and I can copy and paste formatting in a spreadsheet much faster than I could write and format my recipes by hand. I also have my spreadsheets do calculations automatically for me, such as telling me how many times I’ve mixed up each glaze or showing me chemical breakdowns of my glazes based on their ingredients.</p>
                        </li>
                        <li>
                            <h3>Charts</h3>
                            <p>I could theoretically draw charts by hand, but who has time for that? I find it very helpful to include charts in my glaze notes to help visualize my firing schedules and chemical breakdowns of glazes and raw materials.</p>
                        </li>
                    </ul>
                </div>

                <p>Now that you know why I chose spreadsheets over paper, let’s walk through my glaze notes.</p>
                
                <h2>Spreadsheet walk-through</h2>
                <div className="group">
                    <p>There are four main sections to my spreadsheet:</p>
                    <ol>
                        <li>
                            <h3>1.&nbsp;&nbsp;Glaze Log</h3>
                            <div className="section">
                                <img src="images/resources/digitizing-your-glaze-notes/glaze-log.PNG" alt="glaze log"></img>
                                <p>
                                    I use my glaze log to keep track of what glazes I mixed up, when, and anything else worth noting.
                                    I mix large batches of my base glazes up in powder form and store them dry to then use in future glaze tests, so I note on this sheet whether it was a dry or wet batch that I made. 
                                    I’m also generally making glazes in groups, so I have a column for group descriptions to note what my plans were for that group.
                                </p>
                            </div>
                        </li>
                        <li>
                            <h3>2.&nbsp;&nbsp;Firing Log</h3>
                            <div className="section">
                                <img src="images/resources/digitizing-your-glaze-notes/firing-log.PNG" alt="firing log"></img>
                                <p> Similar to the glaze log, I add a new row to my firing log every time I fire my kiln and note the date, cone, and generally note what kind of stuff was in the kiln and if anything notable happened.</p>
                            </div>
                        </li>
                        <li>
                            <h3>3.&nbsp;&nbsp;Firing Schedules</h3>
                            <div className="section">
                                <img src="images/resources/digitizing-your-glaze-notes/firing-schedules.PNG" alt="firing schedules"></img>
                                <p>
                                    When I got a manual kiln, I realized I needed a place to keep track of firing schedules I’d tried and thought it would be helpful to see it in chart form as well. 
                                    I'll note that <a href="https://glazy.org/kilnschedules" target="_blank" rel="noreferrer">Glazy</a> has a good feature for keeping track of kiln schedules as well, I just prefer to keep mine with my other notes.
                                    On this sheet, I note what cone I was aiming for, what cone it actually was, an exact replica of the schedule that I program into my kiln, and a chart to visualize the schedule’s change in temperature over time.
                                </p>
                            </div>
                        </li>
                        <li>
                            <h3>4.&nbsp;&nbsp;Recipes</h3>
                            <div className="section">
                                <img src="images/resources/digitizing-your-glaze-notes/recipes.PNG" alt="recipes"></img>
                                <p>
                                    Each base glaze gets its own recipe sheet.
                                    This image is an example of my sheet for a Chun base.
                                    Any glazes that are just adding new additives to the same base will get put on the same sheet.
                                    <br/><br/>
                                    You’ll notice on my spreadsheet each recipe sheet has a number in its name and each glaze has an ID column composed of the <i>base glaze number</i> : <i>another number</i>. 
                                    That second number tells me which iteration on the base glaze it is. 
                                    This is the system I came up with to easily keep track of my glazes and test tiles before I give them names.
                                    <br/><br/>
                                    On each base glaze sheet, the base recipe is at the top, only listed once, and then for each iteration I did on that base glaze I just refer to the base recipe as “Base” instead of re-writing the ingredients. 
                                    So the only ingredients I write are what would traditionally be labelled under the “Add:” section of a glaze recipe.
                                    I also include a photo of each test tile so I know what’s what.
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>
                <p>
                    If you have any follow up questions, feel free to reach out via <a className="email" href="mailto: julia.hindle+ceramics@gmail.com">E-Mail</a>.
                </p>
            </div>
        </section>
    )
}

export default DigitizingYourGlazeNotes
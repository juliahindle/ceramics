import "styles/resources_glazeAdditiveComboGenerator_story.scss"
import { getGlazePhotoPath } from "Constants"

function Story({storyOpen}) {
    const EXAMPLE_GLAZES = ["1-12", "1-19", "1-20", "1-21", "1-41", "1-45", "1-46", "11-4", "11-5", "11-24", "11-25", "11-27", "28-2", "36-11", "40-11"]

    return (
        <div className={storyOpen ? "story enabled" : "story disabled"}>
            <p>
                This tool started as a quick computer program I wrote for myself in <a href="https://www.python.org/" target="_blank">Python</a>. Here are my original two code files if you're interested:
            </p>
            <div className="program">
                <div className="file">
                    <p className="file-name">glaze_calculation.py</p>
                    <p className="code-block">from random import uniform<br/>from random import randint<br/>from random import sample<br/>from sys import argv<br/><br/>########### FUNCTION DEFINITIONS #############<br/><br/># function: used to print combos to console<br/>def print_combo(final_colors, num):<br/>&nbsp;&nbsp;&nbsp;&nbsp;print('COMBO ' + str(num))<br/>&nbsp;&nbsp;&nbsp;&nbsp;for color, amount in final_colors.items():<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(color.upper() + ': ' + str(round(amount, 1)))<br/>&nbsp;&nbsp;&nbsp;&nbsp;print('')<br/><br/><br/>########### MAIN PROGRAM #############<br/><br/># check for command line input (number of combos to generate)<br/>NUM_TO_GENERATE = 0<br/>if len(argv) > 1:<br/>&nbsp;&nbsp;&nbsp;&nbsp;NUM_TO_GENERATE = int(argv[1])<br/>else:<br/>&nbsp;&nbsp;&nbsp;&nbsp;print("Please provide the number of recipes to generate")<br/>&nbsp;&nbsp;&nbsp;&nbsp;exit(1)<br/><br/># populate colorant list and maxes dictionary<br/>maxes = dict()<br/>colorants = list()<br/>colorant_file = open('colorant_info.txt', 'r')<br/>for line in colorant_file:<br/>&nbsp;&nbsp;&nbsp;&nbsp;components = line.split(',')<br/>&nbsp;&nbsp;&nbsp;&nbsp;maxes[components[0]] = components[1][:-1]<br/>&nbsp;&nbsp;&nbsp;&nbsp;colorants.append(components[0])<br/><br/># generate random numbers<br/>for i in range(NUM_TO_GENERATE):<br/>&nbsp;&nbsp;&nbsp;&nbsp;final_colors = dict()<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;# chances for number of additives:<br/>&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;- 1 additive: 20% chance<br/>&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;- 2 additives: 40% chance<br/>&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;- 3 additives: 20% chance<br/>&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;- 4 additives: 10% chance<br/>&nbsp;&nbsp;&nbsp;&nbsp;#&nbsp;&nbsp;&nbsp;&nbsp;- 5 additives: 10% chance<br/>&nbsp;&nbsp;&nbsp;&nbsp;sample_colorants = sample(colorants, sample([1, 1, 2, 2, 2, 2, 3, 3, 4, 5], 1)[0])<br/>&nbsp;&nbsp;&nbsp;&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;for color in sample_colorants:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;amount = uniform(0, int(maxes[color]))<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;final_colors[color] = amount<br/>    <br/>&nbsp;&nbsp;&nbsp;&nbsp;print_combo(final_colors, i+1)</p>
                </div>
                <div className="file">
                    <p className="file-name">colorant_info.txt</p>
                    <p className="code-block">iron oxide,15<br/>cobalt carbonate,4<br/>cobalt oxide,4<br/>copper carbonate,5<br/>copper oxide,5<br/>tin oxide,10<br/>zircopax,10<br/>manganese dioxide,8<br/>rutile,8<br/>silicon carbide,1<br/>chrome oxide,3<br/>titanium dioxide,10<br/>nickel oxide,5<br/>nickel carbonate,8</p>
                </div>
            </div>
            <p>
                The way I and many other potters like to create glazes is by tweaking the colorants and opacifiers added to a base glaze that we already like.
                The additive choices are generally either by intuition or with progression tests of one or more additives.
            </p>
            <p>
                I thought in the spirit of true experimentation it would be fun to write a tool that could come up with completely random additive combos for my glaze tests, and to my delight these tests have been some of my favorite glazes I've created.
            </p>
            <p>
                Here are a few examples:
            </p>
            <div className="photos">
            {EXAMPLE_GLAZES.map((glaze) => 
                <a key={glaze} href={`/glazes?sidebar=${glaze}`}>
                    <img
                        src={getGlazePhotoPath(glaze, "4x")}
                        srcSet={
                            `${getGlazePhotoPath(glaze, "4x")} 3x,` + 
                            `${getGlazePhotoPath(glaze, "3x")} 2x,` + 
                            `${getGlazePhotoPath(glaze, "2x")} 1x`
                        }
                        alt={`glaze with id: ${glaze}`}
                    />
                </a>
        )}
            </div>
            <p>
                In general, any of my glazes where multiple additives have decimals on them were likely generated from my tool, like this:
            </p>
            <img src="images/resources/glaze-additive-combo-generator/sidebar.png"></img>
            <p>
                I've created the majority of my glazes without this tool, but whenever I'm looking for fresh inspiration I'll run this tool, create some test tiles, and if anything is interesting I'll mix up a larger batch and/or continue to play around with the additives from that starting point.
            </p>
            <p>
                To choose the maximum amounts I'd want of a given ingredient, I looked in my books, online resources, and personal glaze tests for guidance. 
                You can see what values I've been working with in the <code>colorant_info.txt</code> file above. 
                Happy glazing!
            </p>
        </div>
    )
}

export default Story
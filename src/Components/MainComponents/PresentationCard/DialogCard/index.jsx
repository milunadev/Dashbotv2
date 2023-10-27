import React from 'react';
import { AppContext } from '../../../../Context';


const MyDialog = () => {
  
    const {activeNavIcon} = React.useContext(AppContext)
    const dialogMapping = {
        'Sobre MiLu': "Conoce sobre mi, experiencias, actividades e intereses :D",
        'Proyectos': "Conoce sobre mis habilidades en tecnologia con mi lista de proyectos y explicación de cada uno de ellos",
        'Blog': "Blog dedicado a mostrar mis aprendizajes y poder compartirlos",
        'Youtube': "Conoce mi contenido en las diferentes plataformas como microinfluencer.",
        'Dashbot' : "Dashboard de utilización del bot en producción SecuBot"
    }

  return (
        <div class="dialog_container">
            <div class="terminal_toolbar">
                <div class="butt">
                <button class="btn btn-color"></button>
                <button class="btn"></button>
                <button class="btn"></button>
                </div>
                <p class="user">miluna@dev: ~</p>
                <div class="add_tab">+</div>
            </div>
            <div class="terminal_body">
                <div class="terminal_prompt">
                <span class="terminal_user">miluna@dev:</span>
                <span class="terminal_location">~</span>
                <span class="terminal_bling">$</span>
                
                </div>
                <div class="terminal_output">
                    <span className='text-md' class="output_text">{dialogMapping[activeNavIcon]}</span>
                </div>
                {/* <div class="terminal_input">
                <input type="text" class="input_text" placeholder="" />
                </div> */}
            </div>
        </div>

  );
}
export {MyDialog}

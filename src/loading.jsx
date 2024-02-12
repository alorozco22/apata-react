import { Logo1 } from "./logo1";

export function LoadingScreen(){
    //https://www.youtube.com/watch?v=L12wIvuZTOY
	return (
		<div class="loader-wrapper">
        <div class="row">
            <div class="col-12">
                
                <div class="js-figure stars__item">
                    <Logo1 />
                </div>
                

            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <p style={{}}>¿Cuándo fue la última vez que hiciste algo por primera vez?</p>
            </div>
        </div>
    </div>
		);
}
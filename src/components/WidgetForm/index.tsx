import { CloseButton } from "../CloseButton";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

import thoughtImageUrl from '../../img/thought.png';
import wormImageUrl from '../../img/worm.png';
import lampadaImageUrl from '../../img/lampada.png';
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";





export const feedbackTypes = {
    BUG: {
            title: 'Problema',
            image: {
            source: wormImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: lampadaImageUrl,
            alt: 'Imagem de uma lampada'
        },
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de uma nuvem'
        },

        
    },


} ;



export type FeedbackType = keyof  typeof feedbackTypes; 

export function Widgetform() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSent, setFeedbackSent] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSent(false);
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto ">
                { feedbackSent ?(
                    <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
                ) :(
                    <>
                       {!feedbackType ? ( 
                           <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>           
                             ) : (
                                 <FeedbackContentStep 
                                  feedbackType={feedbackType}
                                  onFeedbackRestartRequested={handleRestartFeedback}
                                  onFeedbackSent={() => setFeedbackSent(true)} 
                                />
                            )}
                    </>
                )}

            <footer>
                 
            </footer>
        </div>
    );
}
    

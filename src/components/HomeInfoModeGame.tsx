import type { FC } from 'react';

type Props = {
    gameMode: string;
    gameModeBody: string;
    rules: string;
    rulesBody: string;
}

const HomeInfoModeGame: FC<Props> = (props) => {
    const {
        gameMode,
        gameModeBody,
        rules,
        rulesBody,
    } = props;

    const formattedRulesBody = rulesBody.split('\n').map((line, index) => (
        <span key={index}>
            {line}
            <br />
        </span>
    ));

    return (
        <div className="flex flex-col gap-1">
            <h2 className="text-xl font-bold">•  {gameMode}</h2>
            <p className="text-lg ml-6">{gameModeBody}</p>
            <p className="text-lg ml-6 font-bold">{rules}</p>
            <p className="text-lg ml-9">{formattedRulesBody}</p>
        </div>
    );
};

export default HomeInfoModeGame;
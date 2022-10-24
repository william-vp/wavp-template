import {Card, Typography} from "antd";
import ThemeSwitcher from "../components/layout/ThemeSwitcher";
import LanguageSwitcher from "../components/layout/LanguageSwitcher";
import {useTranslation} from "react-i18next";

const {Text, Title} = Typography;

export const Home = () => {
    const {t} = useTranslation(['app'])
    
    return (
        <div className='bg-gray vh100'>
            <div className="container pt-5 col-lg-5 col-md-6 col-xs-10">
                
                <div className="row justify-content-between">
                    <Card className='card-board co-12'>
                        <div className="row">
                            <div className="col-4">
                                {t('title', {name: 'User'})}
                            </div>
                            <div className="col-4 text-center">
                                <LanguageSwitcher/>
                            </div>
                            <div className="col-4 text-right">
                                <ThemeSwitcher/>
                            </div>
                        </div>
                    </Card>

                </div>
            </div>
        </div>
    )
}
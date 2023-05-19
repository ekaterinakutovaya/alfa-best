import React from 'react';
import { useRouter } from "next/router";

const LanguageToggler = ({divider}) => {
    const router = useRouter();
    const { locale } = useRouter();

    const handleLocaleChange = event => {
        const value = event.currentTarget.dataset.locale;

        router.push(
            {
                route: router.pathname,
                query: router.query
            },
            router.asPath,
            { locale: value }
        );
    };


    return (
        <div className="language-toggler flex justify-between items-center">
            <span
                className={`uz ${
                    locale == "ru" ? "" : "text-[#DBDBDB]"
                    } cursor-pointer ease-in-out duration-300`}
                onClick={handleLocaleChange}
                data-locale="ru"
            >
                Ru
              </span>

            <span
                className={`mx-[8px] w-[1px] h-[16px] ${divider} ease-in-out duration-300`}
            ></span>

            <span
                className={`uz ${
                    locale == "uz" ? "" : "text-[#DBDBDB]"
                    } cursor-pointer ease-in-out duration-300`}
                onClick={handleLocaleChange}
                data-locale="uz"
            >
                Uz
              </span>
        </div>
    );
};

export default LanguageToggler;
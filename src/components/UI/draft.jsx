useEffect(() => {
    if (yearRange.length > 0) {
        if (yearRange[0].year == items[0].year
            // || yearRange[yearRange.length - 1].year == items[items.length - 1].year
        ) {
            return;
        } else {
            if (yearRange[0].year == activeYear - 2) {
                // console.log(yearRange[0].year == activeYear - 2);

                let start = items.findIndex(item => item.year == activeYear) - 3;
                let end = start + 5;
                // console.log(items.slice(start, end));

                setYearRange(items.slice(start, end));
            }
            else if (yearRange[0].year == activeYear + 2) {
                console.log(yearRange[0].year);
                console.log(activeYear + 2);

                // let start = items.findIndex(item => item.year == activeYear) + 3;
                // let end = start + 5;
                // setYearRange(items.slice(start, end));
            }
        }

    }
}, [activeYear]);
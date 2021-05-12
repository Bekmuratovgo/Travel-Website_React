import React, { useContext, useState } from "react";
import { Grid, makeStyles, Paper, Slider } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { topicContext } from "../../contexts/TopicContext";
// import "./SideBar.css";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));

const SideBar = () => {
    const history = useHistory();
    const classes = useStyles();
    const { getTopics } = useContext(topicContext);
    const [sliderValue, setSliderValue] = useState(getSliderMemory());
    const [memory, setMemory] = useState(getMemory());

    function getMemory() {
        const search = new URLSearchParams(history.location.search);
        return search.get("access");
    }

    function getSliderMemory() {
        const search = new URLSearchParams(history.location.search);
        return search.get("price_lte");
    }

    function handleSliderValue(e, value) {
        const search = new URLSearchParams(history.location.search);
        search.set("price_lte", value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getTopics(history);
        setSliderValue(value);
    }

    const handleChangeMemory = (e) => {
        if (e.target.value === "all") {
            history.push(`${history.location.pathname.replace("access")}`);
            getTopics(history);
            return;
        }

        const search = new URLSearchParams(history.location.search);
        search.set("access", e.target.value);
        history.push(`${history.location.pathname}?${search.toString()}`);
        getTopics(history);
        setMemory(e.target.value);
    };

    return (
        <Grid item md={3} className="ssaa" style={{margin: 'auto',paddingBottom: '25px',marginTop:'25px'}} className="access">
            <Paper className={classes.paper}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Access</FormLabel>
                    <RadioGroup
                        value={memory}
                        onChange={handleChangeMemory}
                        aria-label="memory"
                        name="memory1"
                    >
                        <FormControlLabel
                            value="Available"
                            control={<Radio />}
                            label="Available"
                        />
                        <FormControlLabel
                            value="Not access"
                            control={<Radio />}
                            label="Not access"
                        />
                        {/* <FormControlLabel
                            value="Drama"
                            control={<Radio />}
                            label="Drama"
                        /> */}
                        <FormControlLabel
                            value="all"
                            control={<Radio />}
                            label="All"
                        />
                        {/* <FormControlLabel
                            value="Air Max"
                            control={<Radio />}
                            label="Air Max"
                        />
                        <FormControlLabel
                            value="all"
                            control={<Radio />}
                            label="Все"
                        /> */}
                    </RadioGroup>
                </FormControl>
                <Grid>
                    <Slider
                        value={sliderValue}
                        min={500}
                        max={20000}
                        onChange={handleSliderValue}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                    />
                </Grid>
            </Paper>
        </Grid>
    );
};

export default SideBar;

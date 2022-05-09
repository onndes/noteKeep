export default function getColorApp(theme = "dark") {
    if (theme === "dark") {
        return {
            backgroundMain: "#181c1f",
            backgroundAction: "#1f282d",
            light: "#eeeff1",
            lightTwo: "#73777a",
            selected: "#69d5ff",
            pressIn: "#2d3134"
        };
    } else if (theme === "light") {
        return {};
    }
    return {};
}
3;

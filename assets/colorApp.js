export default function getColorApp(theme = "dark") {
    if (theme === "dark") {
        return {
            backgroundMain: "#181c1f",
            backgroundAction: "#1f282d",
            light: "#eeeff1",
        };
    } else if (theme === "light") {
        return {};
    }
    return {};
}

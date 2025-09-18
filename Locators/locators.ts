export const commonLocators= {
    anchorContainsText: (label: string)=> `//a[contains(., '${label}')]`,
    h2WithText: (label: string)=> `//h2[text()='${label}']`,
}
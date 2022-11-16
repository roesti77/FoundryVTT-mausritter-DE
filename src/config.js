export default [
    {
        name: 'enableCompendiumTranslation',
        data: {
            name: 'Kompendiuminhalte übersetzen',
            hint: 'Übersetzen der Kompendiuminhalte. Benötigt das Babele-Modul. (Bei Änderung wird Foundry neu geladen.)',
            scope: 'client',
            type: Boolean,
            config: true,
            default: true,
            onChange: () => window.location.reload()
        }
    },
    {
        name: 'translationDialog',
        data: {
            name: 'Zeige Updatedialog',
            hint: 'Zeigt den Changelog / Update-Dialog.',
            scope: 'world',
            type: Boolean,
            config: true,
            default: true
        }
    }
];

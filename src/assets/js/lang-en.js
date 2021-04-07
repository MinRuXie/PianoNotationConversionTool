export default {
    text: {
        __song_title: 'Please enter the song title.',
        __song_title_point: 'Double click can modify the song title.',
    },
    toolbox: {
        __delete_note: 'Delete this note',
        __space_note: 'Space note',
        __add_line: 'Add new note track',
        __copy_line: 'Copy this note track',
        __move_up_line: 'Move this note track up',
        __move_down_line: 'Move this note track down',
        __show_piano: 'Open the piano',
        __hidden_piano: 'Close the piano',
        __switch_mode: 'Switch Mode',
        __output_result: 'Output as picture',
        __function_description: 'How to use?',
        __switch_lang: '繁體中文'
    },
    colorarea: {
        __color_title: 'Please choose a color.',
        __check: 'OK',
        __cancel: 'Cancel'
    },
    notice: {
        __size_warn: 'Please turn the phone to landscape.',
        __capturing: 'Working...'
    },
    features: {
        rule: {
            __title: 'Features Introduction',
            __item_1: 'Enter the song title: Double click song title can enter or modify it.',
            __item_2: 'Switch Mode: Switch the display mode of the sheet music panel, there are "numbered notation" and "stave". (Default: Numbered Notation)',
            __item_3: 'Output an image file: The result will be displayed on the screen, and the image file can be saved.',
            __item_4: {
                __summary: 'Move "Focus": Click Note track or Note can move focus. When the element get focus, its surroundings will glow.',
                __details: [
                    'Note track focus (up: W, down: S): When Note track get focus, the last note of it will get focus too.',
                    'Note focus (left: A, right: D): When Note get focus, its note track will get focus too.'
                ]
            }
        },
        note: {
            __title: 'Note',
            __item_1: 'Add / Insert: Press the keyboard of piano will create a note behind the focus note, and play the audio.',
            __item_2: 'Space note (Space): Add a hollow note behind "the focused note".',
            __item_3: 'Delete note (Backspace): Delete a focused note.'
        },
        track: {
            __title: 'Note Track',
            __item_1: 'Add new note track (Enter): Add a new empty note track.',
            __item_2: 'Copy this note track: Copy "the focused track and its notes" behind itself.',
            __item_3: 'Move this note track up: Move the order of "the focused track" up.',
            __item_4: 'Move this note track down: Move the order of "the focused track" down.',
            __item_5: 'Change left side color of note track: Double click note track can change color (white, yellow, green, purple, orange).',
            __item_6: 'Delete specific note track: Click right top side `x` button of note track, can delete note track and notes inside of it.'
        }
    }
}
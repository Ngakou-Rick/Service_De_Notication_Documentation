# AlertX Project Structure

This project follows a specific structure to organize its files and directories. Here is an overview of the RACINE project structure:

```
Racine-Project/
├── binary/
│   └── [binary_file]       # Binary file of the machine learning model
├── dataset/
│   └── [datasets]          # Datasets used for the model training
├── Documents/
│   └── [documents]         # Important project documents (reports, useful books, etc.)
├── interface/
│   └── [interface_code]    # Code for the project interface
├── Notebook/
│   └── [notebooks]         # Notebooks used during the machine learning algorithm training phase
└── src/
    ├── classifier.py       # Module for classification of flows based on service types
    ├── file_write3.py      # Module for writing log files
    ├── Flow.py             # Class for packet flow retrieval
    ├── GraphUtils.py       # Class for data structure handling
    ├── wifi_AP_ST_Topo.py  # Physical network topology
    ├── wifi_classifier.py  # Module for dataset generation and external classifier
    └── wifi_monitor_v8.py  # Ryu controller with new rules and functionalities
```

## Description of Directories and Files

- `binary/`: This directory contains the binary file of the machine learning model used in the project.

- `dataset/`: It stores the datasets that are used for training the machine learning model.

- `Documents/`: This directory contains important project documents such as reports, useful books, and other reference materials.

- `interface/`: It contains the code for the project interface, which is responsible for the user interaction and visualization.

- `Notebook/`: This directory includes notebooks used during the machine learning algorithm training phase. These notebooks may contain code, explanations, and analysis related to the project.

- `src/`: The `src` directory contains the source code files for the project. Here is a brief description of the files:

  - `classifier.py`: This module handles the classification of flows based on service types.

  - `file_write3.py`: It is responsible for writing log files.

  - `Flow.py`: This file defines a class for packet flow retrieval.

  - `GraphUtils.py`: This file defines a class for handling data structures.

  - `wifi_AP_ST_Topo.py`: It represents the physical network topology of the WiFi access points and stations.

  - `wifi_classifier.py`: This module is responsible for dataset generation and external classification.

  - `wifi_monitor_v8.py`: This file contains the Ryu controller implementation with new rules and functionalities.

Feel free to explore the directories and files of the RACINE project to understand the project's structure and functionality.

For more detailed information, consult the relevant files and documentation within each directory.

Please note that the directory and file names provided above are placeholders and should be replaced with the actual names used in your RACINE project.<br><br>

<div style="border: 10px solid #c54747; padding: 10px;">
<em><b>Notice:</b></em> 🚧🚧🚧🚧

<p style="color: red">Before observe each RACINE's features with ryu controller you have to launch mininet's topology in 
`wifi_AP_ST_Topo.py` otherwise you will observe anythings in your ryu app </p><br />

```shell 
python3 wifi_AP_ST_Topo.py
```

</div>
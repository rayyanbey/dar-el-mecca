import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';

const BusinessHours = sequelize.define('BusinessHours', {
    monday: {
        type: DataTypes.JSON,
        open: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        openingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        closingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    },
    tuesday: {
        type: DataTypes.JSON,
        open: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        openingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        closingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    },
    wednesday: {
        type: DataTypes.JSON,
        open: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        openingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        closingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    },
    thursday: {
        type: DataTypes.JSON,
        open: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        openingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        closingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    },
    friday: {
        type: DataTypes.JSON,
        open: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        openingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        closingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    },
    saturday: {
        type: DataTypes.JSON,
        open: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        openingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        closingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    },
    sunday: {
        type: DataTypes.JSON,
        open: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        openingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        closingTime: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        }
    }
}, {
    timestamps: true,
    tableName: 'business_hours'
});

export default BusinessHours;

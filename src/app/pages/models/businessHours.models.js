import { DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig';

const BusinessHours = sequelize.define('BusinessHours', {
    monday: {
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

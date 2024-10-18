import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';


function Experience() {
    const { t } = useTranslation();

    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>
                        {t('Front-End Developer - Metro Holding')}
                    </Typography>
                    <Typography>
                        02-2021 / 02-2024
                    </Typography>

                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>
                        {t('Project Engineer - Ser Electric Automation')}
                    </Typography>
                    <Typography>
                        03-2020 / 07-2020
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>
                        {t('Project and Purchasing Engineer - Kontrolmatik Technologies')}
                    </Typography>
                    <Typography>
                        08-2018 / 02-2020
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>
                        {t('Sales and Tendering Engineer - Büyük Electrical')}
                    </Typography>
                    <Typography>
                        04-2018 / 07-2018
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>
                        {t('Technical Service Engineer - Demir Döküm')}
                    </Typography>
                    <Typography>
                        06-2017 / 07-1017
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>
                        {t('Electronics Maintenance Engineer - Parkcam')}
                    </Typography>
                    <Typography>
                        07-2017 / 08-2017
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography>
                    {t('Heavy Current Engineer - Demirer Cable')}
                    </Typography>
                    <Typography>
                        07-2016 / 08-2016
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    )
}

export default Experience
